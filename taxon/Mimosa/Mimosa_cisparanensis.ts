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
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa cisparanensis
const Mimosa_cisparanensis = new Mimosa()
Mimosa_cisparanensis.specificEpithet = 'cisparanensis'

Mimosa_cisparanensis.stems = new Stems()

Mimosa_cisparanensis.stipule = new Stipule()
Mimosa_cisparanensis.stipule.margin = new MarginStipule()
Mimosa_cisparanensis.stipule.adaxial = new AdaxialStipule()
Mimosa_cisparanensis.stipule.abaxial = new AbaxialStipule()

Mimosa_cisparanensis.leaf = new Leaf()
Mimosa_cisparanensis.leaf.petiole = new Petiole()
Mimosa_cisparanensis.leaf.bipinnate = new Bipinnate()
Mimosa_cisparanensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_cisparanensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_cisparanensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cisparanensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_cisparanensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_cisparanensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_cisparanensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cisparanensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 4)
Mimosa_cisparanensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(5)
Mimosa_cisparanensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_cisparanensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_cisparanensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_cisparanensis.inflorescence = new Inflorescence()
Mimosa_cisparanensis.inflorescence.peduncle = new Peduncle()
Mimosa_cisparanensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_cisparanensis.flower = new Flower()
Mimosa_cisparanensis.flower.bracteole = new Bracteole()
Mimosa_cisparanensis.flower.merism = '4-merous'
Mimosa_cisparanensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_cisparanensis.flower.calyx = new Calyx()
Mimosa_cisparanensis.flower.calyx.shape = 'campanulate'
Mimosa_cisparanensis.flower.corolla = new Corolla()
Mimosa_cisparanensis.flower.corolla.shape = 'turbinate'

Mimosa_cisparanensis.androecium = new Androecium()
Mimosa_cisparanensis.androecium.filaments = new Filaments()
Mimosa_cisparanensis.androecium.filaments.colour = 'pinkish'

Mimosa_cisparanensis.ginoecium = new Ginoecium()
Mimosa_cisparanensis.ginoecium.ovary = new Ovary()

Mimosa_cisparanensis.fruit = new Fruit()
Mimosa_cisparanensis.fruit.stipe = new Stipe()
Mimosa_cisparanensis.fruit.replum = new Replum()
Mimosa_cisparanensis.fruit.epicarp = new Epicarp()

Mimosa_cisparanensis.seed = new Seed()


// Description authorship
Mimosa_cisparanensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cisparanensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa cisparanensis
export { Mimosa_cisparanensis }