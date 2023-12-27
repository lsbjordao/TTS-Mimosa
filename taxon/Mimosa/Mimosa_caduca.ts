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


// Description of Mimosa caduca
const Mimosa_caduca = new Mimosa()
Mimosa_caduca.specificEpithet = 'caduca'

Mimosa_caduca.stems = new Stems()

Mimosa_caduca.stipule = new Stipule()
Mimosa_caduca.stipule.margin = new MarginStipule()
Mimosa_caduca.stipule.adaxial = new AdaxialStipule()
Mimosa_caduca.stipule.abaxial = new AbaxialStipule()

Mimosa_caduca.leaf = new Leaf()
Mimosa_caduca.leaf.petiole = new Petiole()
Mimosa_caduca.leaf.bipinnate = new Bipinnate()
Mimosa_caduca.leaf.bipinnate.rachis = new Rachis()
Mimosa_caduca.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_caduca.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_caduca.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 6)
Mimosa_caduca.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_caduca.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_caduca.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_caduca.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(3)
Mimosa_caduca.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 6)
Mimosa_caduca.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_caduca.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_caduca.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_caduca.inflorescence = new Inflorescence()
Mimosa_caduca.inflorescence.peduncle = new Peduncle()
Mimosa_caduca.inflorescence.capitate = new CapitateInflorescence()

Mimosa_caduca.flower = new Flower()
Mimosa_caduca.flower.bracteole = new Bracteole()
Mimosa_caduca.flower.merism = '4-merous'
Mimosa_caduca.flower.calyx = new Calyx()
Mimosa_caduca.flower.calyx.shape = 'campanulate'
Mimosa_caduca.flower.corolla = new Corolla()
Mimosa_caduca.flower.corolla.shape = 'funnelform'

Mimosa_caduca.androecium = new Androecium()
Mimosa_caduca.androecium.filaments = new Filaments()

Mimosa_caduca.ginoecium = new Ginoecium()
Mimosa_caduca.ginoecium.ovary = new Ovary()

Mimosa_caduca.fruit = new Fruit()
Mimosa_caduca.fruit.stipe = new Stipe()
Mimosa_caduca.fruit.replum = new Replum()
Mimosa_caduca.fruit.epicarp = new Epicarp()

Mimosa_caduca.seed = new Seed()


// Description authorship
Mimosa_caduca.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_caduca.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa caduca
export { Mimosa_caduca }