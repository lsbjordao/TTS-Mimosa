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


// Description of Mimosa auriberbis
const Mimosa_auriberbis = new Mimosa()
Mimosa_auriberbis.specificEpithet = 'auriberbis'

Mimosa_auriberbis.stems = new Stems()

Mimosa_auriberbis.stipule = new Stipule()
Mimosa_auriberbis.stipule.margin = new MarginStipule()
Mimosa_auriberbis.stipule.adaxial = new AdaxialStipule()
Mimosa_auriberbis.stipule.abaxial = new AbaxialStipule()

Mimosa_auriberbis.leaf = new Leaf()
Mimosa_auriberbis.leaf.petiole = new Petiole()
Mimosa_auriberbis.leaf.bipinnate = new Bipinnate()
Mimosa_auriberbis.leaf.bipinnate.rachis = new Rachis()
Mimosa_auriberbis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_auriberbis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_auriberbis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(13, 22)
Mimosa_auriberbis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_auriberbis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_auriberbis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_auriberbis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_auriberbis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_auriberbis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_auriberbis.inflorescence = new Inflorescence()
Mimosa_auriberbis.inflorescence.peduncle = new Peduncle()
Mimosa_auriberbis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_auriberbis.flower = new Flower()
Mimosa_auriberbis.flower.bracteole = new Bracteole()
Mimosa_auriberbis.flower.merism = '4-merous'
Mimosa_auriberbis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_auriberbis.flower.calyx = new Calyx()
Mimosa_auriberbis.flower.corolla = new Corolla()

Mimosa_auriberbis.androecium = new Androecium()
Mimosa_auriberbis.androecium.filaments = new Filaments()
Mimosa_auriberbis.androecium.filaments.colour = 'pinkish'

Mimosa_auriberbis.ginoecium = new Ginoecium()
Mimosa_auriberbis.ginoecium.ovary = new Ovary()

Mimosa_auriberbis.fruit = new Fruit()
Mimosa_auriberbis.fruit.stipe = new Stipe()
Mimosa_auriberbis.fruit.replum = new Replum()
Mimosa_auriberbis.fruit.epicarp = new Epicarp()

Mimosa_auriberbis.seed = new Seed()


// Description authorship
Mimosa_auriberbis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_auriberbis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa auriberbis
export { Mimosa_auriberbis }