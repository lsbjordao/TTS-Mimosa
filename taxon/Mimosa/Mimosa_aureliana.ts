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


// Description of Mimosa aureliana
const Mimosa_aureliana = new Mimosa()
Mimosa_aureliana.specificEpithet = 'aureliana'

Mimosa_aureliana.stems = new Stems()

Mimosa_aureliana.stipule = new Stipule()
Mimosa_aureliana.stipule.margin = new MarginStipule()
Mimosa_aureliana.stipule.adaxial = new AdaxialStipule()
Mimosa_aureliana.stipule.abaxial = new AbaxialStipule()

Mimosa_aureliana.leaf = new Leaf()
Mimosa_aureliana.leaf.petiole = new Petiole()
Mimosa_aureliana.leaf.bipinnate = new Bipinnate()
Mimosa_aureliana.leaf.bipinnate.rachis = new Rachis()
Mimosa_aureliana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_aureliana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_aureliana.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(4)
Mimosa_aureliana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_aureliana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_aureliana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_aureliana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 18)
Mimosa_aureliana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_aureliana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_aureliana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_aureliana.inflorescence = new Inflorescence()
Mimosa_aureliana.inflorescence.peduncle = new Peduncle()
Mimosa_aureliana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_aureliana.flower = new Flower()
Mimosa_aureliana.flower.bracteole = new Bracteole()
Mimosa_aureliana.flower.merism = '4-merous'
Mimosa_aureliana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_aureliana.flower.calyx = new Calyx()
Mimosa_aureliana.flower.calyx.shape = 'campanulate'
Mimosa_aureliana.flower.corolla = new Corolla()
Mimosa_aureliana.flower.corolla.shape = 'turbinate'

Mimosa_aureliana.androecium = new Androecium()
Mimosa_aureliana.androecium.filaments = new Filaments()
Mimosa_aureliana.androecium.filaments.colour = 'pinkish'

Mimosa_aureliana.ginoecium = new Ginoecium()
Mimosa_aureliana.ginoecium.ovary = new Ovary()

Mimosa_aureliana.fruit = new Fruit()
Mimosa_aureliana.fruit.stipe = new Stipe()
Mimosa_aureliana.fruit.replum = new Replum()
Mimosa_aureliana.fruit.epicarp = new Epicarp()

Mimosa_aureliana.seed = new Seed()


// Description authorship
Mimosa_aureliana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_aureliana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa aureliana
export { Mimosa_aureliana }