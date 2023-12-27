// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa xiquexiquensis
const Mimosa_xiquexiquensis = new Mimosa()
Mimosa_xiquexiquensis.specificEpithet = 'xiquexiquensis'

Mimosa_xiquexiquensis.stems = new Stems()

Mimosa_xiquexiquensis.stipule = new Stipule()
Mimosa_xiquexiquensis.stipule.margin = new MarginStipule()
Mimosa_xiquexiquensis.stipule.adaxial = new AdaxialStipule()
Mimosa_xiquexiquensis.stipule.abaxial = new AbaxialStipule()

Mimosa_xiquexiquensis.leaf = new Leaf()
Mimosa_xiquexiquensis.leaf.petiole = new Petiole()
Mimosa_xiquexiquensis.leaf.bipinnate = new Bipinnate()
Mimosa_xiquexiquensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_xiquexiquensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_xiquexiquensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_xiquexiquensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(10, 19)
Mimosa_xiquexiquensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_xiquexiquensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_xiquexiquensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_xiquexiquensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_xiquexiquensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_xiquexiquensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_xiquexiquensis.inflorescence = new Inflorescence()
Mimosa_xiquexiquensis.inflorescence.peduncle = new Peduncle()
Mimosa_xiquexiquensis.inflorescence.spicate = new Spicate()

Mimosa_xiquexiquensis.flower = new Flower()
Mimosa_xiquexiquensis.flower.bracteole = new Bracteole()
Mimosa_xiquexiquensis.flower.merism = '3-merous'
Mimosa_xiquexiquensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_xiquexiquensis.flower.calyx = new Calyx()
Mimosa_xiquexiquensis.flower.calyx.shape = 'campanulate'
Mimosa_xiquexiquensis.flower.corolla = new Corolla()
Mimosa_xiquexiquensis.flower.corolla.shape = 'turbinate'

Mimosa_xiquexiquensis.androecium = new Androecium()
Mimosa_xiquexiquensis.androecium.filaments = new Filaments()
Mimosa_xiquexiquensis.androecium.filaments.colour = 'pinkish'

Mimosa_xiquexiquensis.ginoecium = new Ginoecium()
Mimosa_xiquexiquensis.ginoecium.ovary = new Ovary()

Mimosa_xiquexiquensis.fruit = new Fruit()
Mimosa_xiquexiquensis.fruit.stipe = new Stipe()
Mimosa_xiquexiquensis.fruit.replum = new Replum()
Mimosa_xiquexiquensis.fruit.epicarp = new Epicarp()

Mimosa_xiquexiquensis.seed = new Seed()


// Description authorship
Mimosa_xiquexiquensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_xiquexiquensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa xiquexiquensis
export { Mimosa_xiquexiquensis }